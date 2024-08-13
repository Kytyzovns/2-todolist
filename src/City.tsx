import React from 'react';
import {CurrentBankomat} from "./CurrentBankomat";
import {MoneyType} from "./App";
import styled from "styled-components";

type CityPropsType = {
    data: MoneyType[]
}

export const City = ({data}:CityPropsType) => {
// с деструктуризацией пожалуйста


    const mappedMoney = data.map((el: MoneyType) => (
        <CurrentBankomat
            key={el.id}
            money={el}
        />
    ))

    return (
        <Wrapper>
            {mappedMoney}
        </Wrapper>
    );
};

const Wrapper = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`