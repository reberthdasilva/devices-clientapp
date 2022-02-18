import React, { useState } from "react";
import { createDevice, updateDevice } from '../../../services/devices';
import DeviceFormStyled, { ButtonStyled, OptionTitleStyled } from './Styled';

const DeviceForm = ({ device = {}, setEditItem = null, setUpdateList }) => {
    const [hddCapacity, setHddCapacity] = useState(device?.hdd_capacity);
    const [systemName, setSystemName] = useState(device?.system_name);
    const [type, setType] = useState(device?.type);

    const handleForm = async () => {
        if(!systemName || !type || !hddCapacity) return null;
        const payload = { system_name: systemName, type, hdd_capacity: hddCapacity };

        if(setEditItem) {
            setEditItem(false);
            await updateDevice(device?.id, payload);
        } else {
            await createDevice(payload);
            setHddCapacity('');
            setSystemName('');
            setType('');
        }

        setUpdateList(true);
    }

    return (
        <DeviceFormStyled onSubmit={(event) => {
            event.preventDefault();
            handleForm();
        }}>
            <OptionTitleStyled>System Name</OptionTitleStyled>
            <input type="text" name="system_name" value={systemName} onChange={({ target }) => setSystemName(target.value)} />

            <OptionTitleStyled>Type</OptionTitleStyled>
            <select name="type" onChange={({target}) => setType(target.value)} value={type}>
                <option value="">Select Type</option>
                <option value="MAC">MAC</option>
                <option value="WINDOWS_SERVER">WINDOWS SERVER</option>
                <option value="WINDOWS_WORKSTATION">WINDOWS WORKSTATION</option>
            </select>

            <OptionTitleStyled>HDD Capacity</OptionTitleStyled>
            <input type="text" name="hdd_capacity" value={hddCapacity} onChange={({target}) => setHddCapacity(target.value)} />

            <ButtonStyled type="submit">{device?.id ? 'Update' : 'Add Device'}</ButtonStyled>
        </DeviceFormStyled>
    )
};


export default DeviceForm;
