import axios from "axios";
import { useState, useEffect } from "react";

const C2 = () => {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const [recommendedClothes, setRecommendedClothes] = useState([]);

  const clothesByTemperature = {
    above28: ["민소매", "반팔", "반바지", "원피스"],
    from23to27: ["반팔", "얇은 셔츠", "반바지", "면바지"],
    from20to22: ["얇은 가디건", "긴팔", "면바지", "청바지"],
    from17to19: ["얇은 니트", "맨투맨", "가디건", "청바지"],
    from12to16: ["자켓", "가디건", "야상", "스타킹", "청바지", "면바지"],
    from9to11: ["자켓", "트렌치 코트", "야상", "니트", "청바지", "스타킹"],
    from5to8: ["코트", "가죽 자켓", "히트텍", "니트", "레깅스"],
    below4: ["패딩", "두꺼운 코트", "목도리", "기모제품"],
  };

  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

  const getClothesRecommendation = (temp) => {
    if (temp >= 28) return clothesByTemperature.above28;
    if (temp >= 23) return clothesByTemperature.from23to27;
    if (temp >= 20) return clothesByTemperature.from20to22;
    if (temp >= 17) return clothesByTemperature.from17to19;
    if (temp >= 12) return clothesByTemperature.from12to16;
    if (temp >= 9) return clothesByTemperature.from9to11;
    if (temp >= 5) return clothesByTemperature.from5to8;
    return clothesByTemperature.below4;
  };

  const fetchWeather = async (latitude, longitude) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric&lang=kr`
      );

      if (response.status !== 200) {
        throw new Error("날씨 정보를 가져오는 데 실패했습니다.");
      }

      const data = response.data;

      const currentTemp = Math.round(data.main.temp);
      setWeather({
        location: data.name,
        temperature: {
          current: currentTemp,
          min: Math.round(data.main.temp_min),
          max: Math.round(data.main.temp_max),
        },
        description: data.weather[0].description,
      });

      setRecommendedClothes(getClothesRecommendation(currentTemp));
    } catch (err) {
      setError(err.message);
    }
  };

  const getLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchWeather(latitude, longitude);
        },
        (error) => {
          setError("위치 정보를 가져오는 데 실패했습니다: " + error.message);
        }
      );
    } else {
      setError("이 브라우저에서는 위치 정보를 지원하지 않습니다.");
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  if (error) {
    return <div>오류: {error}</div>;
  }

  if (!weather) {
    return <div>위치 정보와 날씨를 로딩 중입니다...</div>;
  }

  return (
    <div className="weather-container">
      <h2>{weather.location} 날씨</h2>
      <div className="weather-details">
        <p>현재 기온: {weather.temperature.current}°C</p>
        <p>최저 기온: {weather.temperature.min}°C</p>
        <p>최고 기온: {weather.temperature.max}°C</p>
        <p>날씨: {weather.description}</p>
        <p>오늘의 추천 옷차림: {recommendedClothes.join(", ")}</p>
        {weather.description.includes("비") ||
        weather.description.includes("눈") ? (
          <p>우산! 챙기세요</p>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default C2;
