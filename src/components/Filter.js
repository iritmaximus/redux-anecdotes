import { useDispatch } from "react-redux";

import { setFilter } from "../reducers/filterReducer";

export const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = event => {
    dispatch(setFilter(event.target.value));
  }

  return (
    <div>
        filter <input onChange={handleChange}/>
    </div>
  )
}
