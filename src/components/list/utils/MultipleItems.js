import React, {useState} from 'react';

const MultipleItems = ({items}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      {isExpanded ? (
        <i
          className="far fa-minus-square"
          style={{cursor: 'pointer'}}
          onClick={toggleExpanded}
        ></i>
      ) : (
        <i
          className="far fa-plus-square"
          style={{cursor: 'pointer'}}
          onClick={toggleExpanded}
        ></i>
      )}
      <div className={`gnome-profession-list-${isExpanded ? 'expand' : 'collapse'}`}>
        {items.map((item, id) => (
          <li key={id}>{item}</li>
        ))}
      </div>
    </>
  );
};

export default MultipleItems;
