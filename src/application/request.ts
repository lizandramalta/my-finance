const domain = 'http://192.168.0.180:3000'

export async function get(path: string) {
  try {
    const response = await fetch(`${domain}/${path}`)
    const json = await response.json()
    return json
  } catch (error) {
    console.warn(error)
  }
}

export async function post(path: string, body: string) {
  try {
    const settings = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: body,
    }
    const response = await fetch(`${domain}/${path}`, settings)
    const json = await response.json()
    return json
  } catch (error) {
    console.warn(error)
  }
}

export async function deleteById(path: string, id: number) {
  try {
    const settings = {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }
    const response = await fetch(
      `${domain}/${path}/${JSON.stringify(id)}`,
      settings
    )
    const json = await response.json()
    return json
  } catch (error) {
    console.warn(error)
  }
}

export async function put(path: string, body: string, id: number) {
  try {
    const settings = {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: body,
    }
    const response = await fetch(
      `${domain}/${path}/${JSON.stringify(id)}`,
      settings
    )
    const json = await response.json()
    return json
  } catch (error) {
    console.warn(error)
  }
}
