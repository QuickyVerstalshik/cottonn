import React, { Component } from 'react';

export default function Categories({ value, onChangeCategory }) {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const categories = ['Все', 'Свиторы', 'Оверсайз', 'Толстовки', 'С копюшоном', 'Закрытые'];

  // const onClickCategory = (index) => {
  //   setActiveIndex(index);
  // };

  return (
    <div className="categories">
      <ul>
        {categories.map((categoryName, i) => (
          <li
            key={i}
            onClick={() => {
              onChangeCategory(i);
            }}
            className={value == i ? 'active' : ''}>
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
}
