import styled from "styled-components";

const DeviceListStyled = styled.ul`
    display: block;
    list-style: none;
    margin: 20px 0;
    max-height: 500px;
    min-width: 500px;
    overflow-y: auto;
    padding: 0;
`;

export const DeviceItemStyled = styled.li`
    display: flex;
    justify-content: space-between;
    border: 1px solid #e7e7e7;
    border-left: 5px solid #3ba1c4;
    margin-bottom: 5px;
    padding: 5px 5px 5px 15px;
`;

export const DeviceInfoStyled = styled.div`
    & > span {
        display: block;
        margin-bottom: 3px;
    }
`;

export const DeviceOptionsStyled = styled.div`
    display: flex;
    align-items: center;

    & > svg {
        cursor: pointer;
        margin: 0 5px;
    }
`;

export default DeviceListStyled;