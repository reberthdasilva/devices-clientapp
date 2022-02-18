import API from './index';

export const getDevice = async ( id ) => {
    return await API.get(`devices/${id}`);
}

export const getDevices = async () => {
    return await API.get('devices');
}

export const createDevice = async ( device = {} ) => {
    return await API.post('devices', device);
}

export const updateDevice = async ( id, device = {} ) => {
    return await API.put(`devices/${id}`, device);
}

export const deleteDevice = async ( id ) => {
    return await API.delete(`devices/${id}`);
}
