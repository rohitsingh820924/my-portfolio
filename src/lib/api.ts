import axios from 'axios';

export async function apiGet(endpoint: string, params = {}) {
  try {
    const response = await axios.get(endpoint, {
      params,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error('API GET Error:', error);
    throw error;
  }
}

export async function apiPost(endpoint: string, body: any, isFormData = false) {
  try {
    const headers = isFormData
      ? { 'Content-Type': 'multipart/form-data' }
      : { 'Content-Type': 'application/json' };

    const response = await axios.post(endpoint, isFormData ? body : JSON.stringify(body), { headers });

    return response.data;
  } catch (error) {
    console.error('API POST Error:', error);
    throw error;
  }
}

export async function apiPut(endpoint: string, body: any) {
  try {
    const response = await axios.put(endpoint, JSON.stringify(body), {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error('API PUT Error:', error);
    throw error;
  }
}

export async function apiDelete(endpoint: string, body: any) {
  try {
    const response = await axios.delete(endpoint, {
      headers: {
        'Content-Type': 'application/json',
      },
      data: JSON.stringify(body),
    });
    return { success: true };
  } catch (error) {
    console.error('API DELETE Error:', error);
    throw error;
  }
}

export async function apiPatch(endpoint: string, body: any , isFormData = false) {
  try {

    const headers = isFormData
      ? { 'Content-Type': 'multipart/form-data' }
      : { 'Content-Type': 'application/json' };
    const response = await axios.patch(endpoint, isFormData ? body : JSON.stringify(body), { headers });
    return response.data;
  } catch (error) {
    console.error('API PATCH Error:', error);
    throw error;
  }
}
