// const API_URL = `http://127.0.0.1:8000`;

const catchAsync = (cb) => async (...params) => {
  try {
    await cb(...params);
  } catch (error) {
    console.log("error ", error);
    return false;
  }
}

export const fetchAllUsers = catchAsync(async () => {
  const res = await fetch(`/api/users`);
  const resJson = await res.json();

  return resJson;
})

export const fetchSingleUser = catchAsync(async ( userId ) => {
  const res = await fetch(`/api/users/${userId}`);
  const resJson = await res.json();

  return resJson;
})

export const createUser = catchAsync(async ( data ) => {
  const res = await fetch(`/api/users`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data) 
  });
  const resJson = await res.json();

  return resJson;
})

export const updateSingleUser = catchAsync(async ( userId, data ) => {
  const res = await fetch(`/api/users/${userId}`, {
    method: 'PATCH',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data) 
  });
  const resJson = await res.json();

  return resJson;
})

export const deleteSingleUser = catchAsync(async ( userId ) => {
  const res = await fetch(`/api/users/${userId}`, {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data) 
  });
  const resJson = await res.json();

  return resJson;
})