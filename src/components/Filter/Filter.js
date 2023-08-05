import { useDispatch } from "react-redux";
import { categories } from "../../data/categories";
import { SortOptions } from "../../data/sortOptions";
import { setCategory, setSort } from "../../redux/events/filterSlice";
import { useEffect } from "react";

export const Filter = () => {
  const dispatch = useDispatch();

  const changeCategory = (e) => dispatch(setCategory(e.target.value));
  const changeSort = (e) => dispatch(setSort(e.target.value));

  useEffect(() => {
    dispatch(setCategory(""));
    dispatch(setSort(""));
  }, [dispatch]);

  return (
    <div>
      <select name="category" defaultValue="Category" onChange={changeCategory}>
        <option value="Category" disabled>
          Category
        </option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <select name="sort" defaultValue="Sort by" onChange={changeSort}>
        <option value="Sort by" disabled>
          Sort by
        </option>
        {SortOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};
