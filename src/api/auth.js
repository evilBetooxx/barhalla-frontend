

export async function registerUser(formData) {
    try {
      const response = await fetch('http://localhost:4000/barhalla/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        const errorData = await response.json();
        throw new Error(errorData);
      }
    } catch (error) {
      throw error;
    }
  }
  
  export async function loginUser(formData) {
    try {
      const response = await fetch('http://localhost:4000/barhalla/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        const errorData = await response.json();
        throw new Error(errorData);
      }
    } catch (error) {
      throw error;
    }
  }

  
  