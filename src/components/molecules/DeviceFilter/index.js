import React, { useEffect, useState } from "react";
import DeviceFilterStyled, { OptionTitleStyled } from './Styled';

const DeviceFilter = ({ currentDevices, devices, updateValues }) => {
    const [sort, setSort] = useState('');
    const [type, setType] = useState(false);

    useEffect(() => {
        const filterDevices = () => {
            const newList = devices.filter(device => (!type || device.type === type));
            updateValues([...newList]);
        }

        filterDevices();
    }, [type, devices, updateValues]);

    useEffect(() => {
        const sortDevices = (field) => {
            const sortAlphabetic = (a, b) => a[field].localeCompare(b[field]);
    
            const sortNumber = (a, b) => {
                if (parseInt(a[field]) > parseInt(b[field])) return 1;
                if (parseInt(a[field]) < parseInt(b[field])) return -1;
                return 0;
            }
    
            let newList = [];
            if(field === 'system_name') {
                newList = currentDevices.sort(sortAlphabetic);
            } else if(field === 'hdd_capacity') {
                newList = currentDevices.sort(sortNumber);
            } else {
                newList = devices;
            }
    
            updateValues([...newList]);
        }

        sortDevices(sort);
    }, [sort, devices, currentDevices, updateValues]);

    return (
        <DeviceFilterStyled>
            <OptionTitleStyled>Device type:</OptionTitleStyled>
            <select onChange={({ target }) => setType(target.value)}>
                <option value=''>All</option>
                <option value='MAC'>MAC</option>
                <option value='WINDOWS_SERVER'>WINDOWS SERVER</option>
                <option value='WINDOWS_WORKSTATION'>WINDOWS WORKSTATION</option>
            </select>

            <OptionTitleStyled>Sort by:</OptionTitleStyled>
            <select onChange={({ target }) => setSort(target.value)}>
                <option value=''>Default</option>
                <option value='system_name'>System Name</option>
                <option value='hdd_capacity'>HDD Capacity</option>
            </select>
        </DeviceFilterStyled>
    )
}

export default DeviceFilter;
