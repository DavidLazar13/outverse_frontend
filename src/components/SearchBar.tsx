import React, {useEffect, useState} from "react";
import styled from "styled-components";

interface SearchProps {
    searchValue: string
    change:  (text: string) => void;
}

export default function ({searchValue, change}:SearchProps) {
    const [newValue, setNewValue] = useState(searchValue)

    function onSearch(e: { target: { value: React.SetStateAction<string>; }; }){
        setNewValue(e.target.value)
        change(newValue)
    }

    return(
        <div>
            <SearchInput value={newValue} onChange={onSearch}></SearchInput>
        </div>
    )
}

const SearchInput = styled.input`
  display: flex;
  border-width: 1px;
  height: 40px;
  border-radius: 10px ;
  width: calc(100% - 25px);
  margin-right: 10px;
  margin-left: 10px;
  margin-bottom: 20px;
  margin-top: 20px;
  font-size: 1rem;
  color: #636e72;
  font-weight: 300;
`;
