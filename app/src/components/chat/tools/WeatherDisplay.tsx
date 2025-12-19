import { Cloud, CloudRain, Sun, Droplets, MapPin } from 'lucide-react';

interface WeatherResult {
  location: string;
  temperature: number;
  condition: string;
  humidity: number;
}

interface WeatherDisplayProps {
  result: WeatherResult;
}

export function WeatherDisplay({ result }: WeatherDisplayProps) {
  const getWeatherIcon = (condition: string) => {
    switch (condition) {
      case 'sunny':
        return <Sun className="h-8 w-8 text-yellow-500" />;
      case 'rainy':
        return <CloudRain className="h-8 w-8 text-blue-500" />;
      default:
        return <Cloud className="h-8 w-8 text-gray-500" />;
    }
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <MapPin className="h-4 w-4" />
        <span>{result.location}</span>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          {getWeatherIcon(result.condition)}
          <div>
            <div className="text-3xl font-bold">{result.temperature}°C</div>
            <div className="text-sm text-muted-foreground capitalize">
              {result.condition}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 text-sm">
          <Droplets className="h-4 w-4 text-blue-500" />
          <span>{result.humidity}%</span>
        </div>
      </div>
    </div>
  );
}
