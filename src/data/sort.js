import { ReactComponent as ArrowUpIcon } from "../images/svg/arrowUp.svg";
import { ReactComponent as ArrowDownIcon } from "../images/svg/arrowDown.svg";

export const sortOptions = [
  {
    value: "Name to A",
    label: (
      <>
        Name
        <ArrowUpIcon />
      </>
    ),
  },
  {
    value: "Name to Z",
    label: (
      <>
        Name
        <ArrowDownIcon />
      </>
    ),
  },
  {
    value: "Date far",
    label: (
      <>
        Date
        <ArrowUpIcon />
      </>
    ),
  },
  {
    value: "Date soon",
    label: (
      <>
        Date
        <ArrowDownIcon />
      </>
    ),
  },
  {
    value: "Priority to high",
    label: (
      <>
        Priority
        <ArrowUpIcon />
      </>
    ),
  },
  {
    value: "Priority to low",
    label: (
      <>
        Priority
        <ArrowDownIcon />
      </>
    ),
  },
];
