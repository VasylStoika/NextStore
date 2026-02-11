const API_KEY = '3e085e3c3414d07a4f78ac66c1399fb9'
const API_URL = 'https://api.novaposhta.ua/v2.0/json/'

export const searchCities = async (query) => {
    if (!query) return []

    const body = {
        apiKey: API_KEY,
        modelName: 'Address',
        calledMethod: 'searchSettlements',
        methodProperties: {
            CityName: query,
            Limit: '50',
            Page: '1',
            Language: 'UA'
        }
    }

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: { 'Content-Type': 'application/json' }
        })
        const data = await response.json()
        if (data.success && data.data && data.data.length > 0) {

            return data.data[0].Addresses.map(item => ({
                label: `${item.Present}`,
                value: item.DeliveryCity,
                ref: item.DeliveryCity
            }))
        }
        return []
    } catch (error) {
        console.error('NP API Error:', error)
        return []
    }
}

export const getWarehouses = async (cityRef) => {
    if (!cityRef) return []

    const body = {
        apiKey: API_KEY,
        modelName: 'Address',
        calledMethod: 'getWarehouses',
        methodProperties: {
            CityRef: cityRef,
            Limit: '500',
            Language: 'UA'
        }
    }

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: { 'Content-Type': 'application/json' }
        })
        const data = await response.json()
        if (data.success) {
            return data.data.map(item => ({
                label: item.Description,
                value: item.Ref
            }))
        }
        return []
    } catch (error) {
        console.error('NP API Error:', error)
        return []
    }
}
