import React, { useEffect, useState } from "react";
import { OneColumn } from '../../templates';
import { DeviceList } from '../../molecules';
import { getDevices } from '../../../services/devices';

const Home = () => {
    const [devices, setDevices] = useState([]);
    const [updateList, setUpdateList] = useState(false);

    const listDevices = async () => {
        const { data } = await getDevices();
        setDevices(data);
    }

    useEffect(() => {
        listDevices();
    },[])

    useEffect(() => {
        if(updateList) {
            listDevices();
            setUpdateList(false);
        } 
    }, [updateList]);

    return (
        <OneColumn>
            <DeviceList devices={devices} setUpdateList={setUpdateList} />
        </OneColumn>
    )
};

export default Home;
