import { format } from "date-fns";
import { useCallback } from "react";
import { Outlet } from "react-router-dom";
import { useTransitionNavigate } from "../utils/useTransitionNavigate";
import { Cell } from "./Cell";

export const Calendar = () => {
  const { transitionNavigate } = useTransitionNavigate();

  const handleClickDate = useCallback(
    (date: Date) => () => {
      transitionNavigate(format(date, "yyyyMMdd"), "expand-date");
    },
    [transitionNavigate]
  );

  return (
    <main style={{ maxWidth: "800px", margin: "auto" }}>
      <header>
        <select>
          <option>2022</option>
          <option>2023</option>
          <option>2024</option>
        </select>
        年
        <select>
          <option>5</option>
          <option>6</option>
          <option>7</option>
        </select>
        月
      </header>
      <div
        style={{
          display: "flex",
          flexFlow: "row wrap",
        }}
      >
        <Cell>日</Cell>
        <Cell>月</Cell>
        <Cell>火</Cell>
        <Cell>水</Cell>
        <Cell>木</Cell>
        <Cell>金</Cell>
        <Cell>土</Cell>
        <Cell>
          <button
            onClick={handleClickDate(new Date("2023-06-01T00:00:00+09:00"))}
          >
            1
          </button>
        </Cell>
        <Cell>
          <button>2</button>
        </Cell>
        <Cell>
          <button>3</button>
        </Cell>
        <Cell>
          <button>4</button>
        </Cell>
        <Cell>
          <button>5</button>
        </Cell>
        <Cell>
          <button>6</button>
        </Cell>
        <Cell>
          <button>7</button>
        </Cell>
      </div>
      <Outlet />
    </main>
  );
};
