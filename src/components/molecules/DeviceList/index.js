import React, { useEffect, useState } from "react";
import { FaTrash, FaPen } from "react-icons/fa";
import { deleteDevice } from '../../../services/devices';
import { DeviceForm, DeviceFilter } from '../';
import DeviceListStyled, { DeviceItemStyled, DeviceOptionsStyled, DeviceInfoStyled } from './Styled';

const DeviceItem = ({ device, setUpdateList }) => {
    const [editItem, setEditItem] = useState(false);

    return (
        <DeviceItemStyled>
            {!editItem ? (
                <>
                    <DeviceInfoStyled>
                        <span>{device?.system_name}</span>
                        <span>{device?.type}</span>
                        <span>{device?.hdd_capacity}</span>
                    </DeviceInfoStyled>
                    <DeviceOptionsStyled>
                        <FaPen onClick={async () => {
                            await setEditItem(!editItem);
                            setUpdateList(true);
                        }} />

                        <FaTrash onClick={async () => {
                            await deleteDevice(device.id);
                            setUpdateList(true);
                        }} />
                    </DeviceOptionsStyled>
                </>
            ) : (
                <DeviceForm device={device} setEditItem={setEditItem} setUpdateList={setUpdateList} />
            )}
            
        </DeviceItemStyled>
    )
}

const DeviceList = ({ devices, setUpdateList }) => {
    const [currentDevices, setCurrentDevices] = useState([...devices]);

    useEffect(() => {
        setCurrentDevices(devices);
    }, [devices]);

    useEffect(() => {
        setCurrentDevices(currentDevices);
    }, [currentDevices]);

    return (
        <>
            <DeviceFilter devices={devices} currentDevices={currentDevices} updateValues={setCurrentDevices} />
            <DeviceListStyled>
                {currentDevices.map((device) => (
                    <DeviceItem key={device.id} device={device} setUpdateList={setUpdateList} />
                ))}
            </DeviceListStyled>
            <DeviceForm setUpdateList={setUpdateList} />
        </>
    )
};

export default DeviceList;
