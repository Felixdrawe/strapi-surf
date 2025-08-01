async function getHomepageData() {
  const BASE_URL = 'http://localhost:1337';
  const path = '/api/homepage';
  try {
    const response = await fetch(`${BASE_URL}${path}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return { ...data.data };
  } catch (error) {
    console.error('Error fetching homepage data:', error);
    return null;
  }
}

export default async function Home() {
  const homepageData = await getHomepageData();

  if (!homepageData) {
    return <p>Error loading homepage data</p>;
  }

  return (
    <div>
      <h1>Homepage</h1>
      {homepageData ? (
        <div>
          <h2>{homepageData.title}</h2>
          <p>{homepageData.description}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
