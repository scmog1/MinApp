import React, { useEffect, useState } from 'react';
import '../css/pages/Hjem.css';
import discgolfImage from '../assets/images/discgolf.png'; // Import the image

const HomePage = () => {
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    const apiUrls = [
      {
        url: 'https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=59.408876&lon=9.059539',
        name: 'Bø i Telemark Discgolfbane',
      },
      {
        url: 'https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=59.598875&lon=9.268005',
        name: 'Lisleherad Discgolfbane',
      },
      {
        url: 'https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=59.184969&lon=9.597135',
        name: 'Skien Discgolfbane',
      },
      {
        url: 'https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=59.382209&lon=8.518940',
        name: 'Kvitsund Discgolfbane',
      },
    ];

    const fetchWeatherData = async () => {
      const weatherDataArray = await Promise.all(
        apiUrls.map(async (api) => {
          const response = await fetch(api.url, {
            headers: {
              'User-Agent': 'Discgolf (discgolf@noreply.com)', // Obligatorisk
            },
          });
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const data = await response.json();
          const timeseries = data.properties.timeseries;
          if (timeseries.length > 0) {
            const latestData = timeseries[0];
            const details = latestData.data.instant.details;
            const temperature = details.air_temperature;
            const windSpeed = details.wind_speed;
            const symbolCode = latestData.data.next_1_hours
              ? latestData.data.next_1_hours.summary.symbol_code
              : 'unknown';
            return {
              name: api.name,
              temperature,
              windSpeed,
              symbolCode,
              time: latestData.time,
            };
          }
          return null;
        })
      );
      setWeatherData(weatherDataArray.filter((data) => data !== null));
    };

    fetchWeatherData().catch((error) => console.error('Feil:', error));
  }, []);

  return (
    <div className='home-page'>
      <div className='left-column'>
        <div className='image-container'>
          <img className='bilde' src={discgolfImage} alt='Discgolf' />
        </div>
        <div className='weather-grid'>
          {weatherData.map((data, index) => (
            <div key={index} className='weather-box'>
              <div className='weather-day'>
                <h2>{data.name}</h2>
                <p>Dato: {new Date(data.time).toLocaleDateString()}</p>
                <p
                  className={`temperature ${
                    data.temperature >= 0 ? 'positive' : 'negative'
                  }`}
                >
                  Temperatur: {data.temperature}°C
                </p>
                <p className='wind-speed'>
                  Vindhastighet: {data.windSpeed} m/s
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='text-container'>
        <h2>Velkommen til vår Discgolf side!</h2>
        <p>
          Discgolf er en av de raskest voksende idrettene i verden, og det er
          ikke vanskelig å forstå hvorfor. Sporten kombinerer natur, trening og
          sosialt samvær på en unik måte, noe som gjør den til en perfekt
          aktivitet for folk i alle aldre og nivåer.
        </p>

        <p>
          Discgolf er lett å komme i gang med, uansett om du er ung eller
          gammel, erfaren eller nybegynner. Du trenger kun noen få discs og en
          vilje til å prøve noe nytt. Baner finnes over hele Norge, og mange av
          dem er gratis å bruke. Dette gjør sporten både tilgjengelig og rimelig
          sammenlignet med mange andre aktiviteter.
        </p>

        <p>
          Når du spiller discgolf, får du mosjon samtidig som du tilbringer tid
          utendørs. Gåturene mellom kurvene gir god, lavintensiv trening, og
          kastene utfordrer både teknikk og styrke. Det er en fantastisk måte å
          koble av fra hverdagen på og nyte den norske naturen, enten det er i
          en park, skog eller på fjellet.
        </p>

        <p>
          En stor del av discgolfens appell er det sosiale aspektet. Enten du
          spiller en runde med venner eller møter nye mennesker på banen, er
          discgolf en flott måte å bygge relasjoner på. Mange opplever at
          sporten er like mye om fellesskap som konkurranse.
        </p>

        <h2>Ønsker du å bli bedre?</h2>

        <p>
          Som medlem i en klubb får du tilgang til veiledning og tips fra mer
          erfarne spillere. Mange klubber arrangerer treninger, workshops og
          introduksjonskurs for å hjelpe medlemmene til å forbedre teknikk og
          forstå spillets strategi.
        </p>

        <p>
          Klubbmedlemskap gir deg ofte muligheten til å delta i både lokale og
          nasjonale turneringer. Dette kan gi en ekstra dimensjon til spillet,
          enten du er ute etter en liten utfordring eller ønsker å teste deg på
          et høyere nivå.
        </p>

        <p>
          Ved å bli medlem i en klubb bidrar du til å støtte discgolfens vekst
          og utvikling. Mange klubber jobber aktivt med å vedlikeholde og
          utvikle baner, rekruttere nye spillere og skape et positivt miljø
          rundt sporten.
        </p>

        <h2>Klar for å prøve?</h2>

        <p>
          Discgolf er mer enn bare en sport – det er en livsstil som kombinerer
          moro, helse og fellesskap. Finn en klubb i nærheten av deg, og oppdag
          hvorfor så mange allerede har blitt hekta på denne fantastiske
          sporten. Kanskje blir du den neste til å treffe “ace” på første
          forsøk?
        </p>
      </div>
    </div>
  );
};

export default HomePage;
