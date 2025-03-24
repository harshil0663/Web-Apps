import React, { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Loader2 } from 'lucide-react';
import { queryClient } from "./main";

const getPersons = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  const { data } = await axios.get("http://localhost:3001/api/persons");
  return data;
};

const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
};

const formatPhoneNumber = (number) => {
  const cleaned = number.replace(/\D/g, "").slice(0, 10);
  const match = cleaned.match(/^(\d{2,3})-(\d{8})$/);

  if (!match) return number;
  return [match[1], match[2]].filter(Boolean).join("-");
};

const App = () => {
  const { data: persons, isLoading, isError } = useQuery({
    queryKey: ["persons"],
    queryFn: getPersons,
  });

  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");
  const [notification, setNotification] = useState(null);
  const debouncedFilter = useDebounce(filter, 1000);

  if (isLoading) return <Loader2 />;

  const validatePhoneNumber = (number) => {
    const phoneregex = /^\d{2,3}-\d{6,8}$/;
    return phoneregex.test(number);
  };

  const handlePhoneNumberChange = (e) => {
    let input = e.target.value;

    input = input.replace(/\D/g, '');

    if (input.length > 11) {
      input = input.slice(0, 11);
    }

    let formattedNumber = '';

    if (input.length <= 10) {
      formattedNumber = input.replace(/^(\d{2})(\d{0,8})$/, '$1-$2');
    } else {
      formattedNumber = input.replace(/^(\d{3})(\d{0,8})$/, '$1-$2');
    }

    setNewNumber(formattedNumber);
  };

  const showNotification = (message) => {
    setNotification(message);
    setTimeout(() => setNotification(null), 10000);
  };

  const handleAddPerson = async (e) => {
    e.preventDefault();
    if (!validatePhoneNumber(newNumber)) {
      showNotification("Invalid phone number! It must be in format: 123-456-7890");
      return setNewNumber("");
    }

    const existingPerson = persons.find((p) => p.name === newName);

    try {
      if (existingPerson) {
        if (window.confirm(`${newName} already exists. Update the number?`)) {
          const updatedPerson = { ...existingPerson, number: newNumber };
          await axios.put("http://localhost:3001/api/persons/" + existingPerson._id, updatedPerson);
          showNotification(`Updated ${newName}`);
        }
      } else {
        const newPerson = { name: newName, number: newNumber, id: (persons.length + 1) };
        await axios.post("http://localhost:3001/api/persons", newPerson);
        showNotification(`Added ${newName}`);
      }
    } catch (error) {
      if (error.response) {
        showNotification(`Error: ${error.response.data.error}`);
      }
    }

    queryClient.invalidateQueries({ queryKey: ["persons"] });
    setNewName("");
    setNewNumber("");
  };

  const handleDeletePerson = async (id, name) => {
    if (window.confirm("Delete " + name + " ?")) {
      await axios.delete("http://localhost:3001/api/persons/" + id);
      queryClient.invalidateQueries({ queryKey: ["persons"] });
      showNotification(`Deleted ${name}`);
    }
  };

  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(debouncedFilter.toLowerCase())
  );

  return (
    <div>
      <h2>Phonebook</h2>
      {notification && <div style={{ color: "green" }}>{notification}</div>}
      <div>
        filter shown with <input type="text" value={filter} onChange={(e) => setFilter(e.target.value)} />
      </div>
      <h3>add a new</h3>
      <form onSubmit={handleAddPerson}>
        <div>
          name: <input value={newName} onChange={(e) => setNewName(e.target.value)} required />
        </div>
        <div>
          number: <input value={newNumber} onChange={handlePhoneNumberChange} maxLength="12" required />
        </div>
        <button type="submit">add</button>
      </form>

      <h3>Numbers</h3>
      <ul>
        {filteredPersons.map((person) => (
          <li key={person.id}>
            {person.name} {person.number}{" "}
            <button onClick={() => handleDeletePerson(person._id, person.name)}>delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
