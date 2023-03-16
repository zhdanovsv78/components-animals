import React, { useState } from "react";
import Counter from "./counter";

const CountersList = () => {
  const initialTags = [
    { id: 0, name: "Кошка", value: 0 },
    { id: 1, name: "Собака", value: 1 },
    { id: 2, name: "Попугай", value: 2 },
    { id: 3, name: "Корова", value: 3 },
    { id: 4, name: "Курица", value: 4 },
    { id: 5, name: "Таракан", value: 5 },
  ];

  const updateTags = [
    { id: 0, name: "Медведь", value: 1 },
    { id: 1, name: "Косуля", value: 7 },
    { id: 2, name: "Рысь", value: 2 },
    { id: 3, name: "Волк", value: 15 },
    { id: 4, name: "Лиса", value: 3 },
    { id: 5, name: "Змея", value: 5 },
  ];

  const [tags, setTags] = useState(initialTags);

  const handleReset = () => {
    setTags(initialTags);
  };
  const handleUpdate = () => {
    setTags(updateTags);
  };

  const handleIncrement = (id) => {
    setTags(
      tags.map((tag) => {
        if (tag.id === id) {
          tag.value++;
        }
        return tag;
      })
    );
  };

  const handleDecrement = (id) => {
    setTags(
      tags.map((tag) => {
        if (tag.id === id && tag.value > 0) {
          tag.value--;
        }
        return tag;
      })
    );
  };

  const handleDelete = (id) => {
    setTags(tags.filter((tag) => tag.id !== id));
  };

  const getPhrase = (num, sub = 0) => {
    switch (sub) {
      case 0:
        if (num === 1) {
          return "вид";
        }
        if (num > 4) {
          return "видов";
        }

        if ([2, 3, 4].includes(num)) {
          return "вида";
        }
        break;
      case 1:
        if (num === 1) {
          return "животное";
        }
        if (num > 1) {
          return "животных";
        }
        break;
    }
  };

  const getTitle = () => {
    const catCount = getCategoryAnimal();
    return catCount === 0 ? (
      <h4 className='m-2'>У меня никого нет(((</h4>
    ) : (
      <h4 className='m-2'>{`У меня есть ${catCount} ${getPhrase(
        catCount
      )} животных!`}</h4>
    );
  };

  const getSumAnimal = () => {
    let res = tags.map(({ value }) => value);
    let sum = res.reduce((a, acc) => a + acc, 0);
    return sum;
  };

  const getCategoryAnimal = () => {
    const countCategory = tags.filter((tag) => tag.value > 0);
    return countCategory.length;
  };

  const sum = getSumAnimal();

  return (
    <>
      {getTitle()}

      {sum > 0 &&
        tags.map((tag) => (
          <Counter
            key={tag.id}
            onDelete={handleDelete}
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
            {...tag}
          />
        ))}
      {sum > 0 && (
        <>
          <hr />
          <h5 className='m-2'>
            А всего у меня {sum} {getPhrase(sum, 1)}!
          </h5>
        </>
      )}
      <button className='btn btn-primary m-2' onClick={handleReset}>
        Reset
      </button>
      <button className='btn btn-primary m-2' onClick={handleUpdate}>
        Update
      </button>
    </>
  );
};

export default CountersList;
