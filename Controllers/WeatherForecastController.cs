using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using SPA.WebApp.Services;

namespace SPA.WebApp.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {


        private readonly ILogger<WeatherForecastController> logger;
        private readonly WeatherMan weatherMan;

        public WeatherForecastController(ILogger<WeatherForecastController> logger, WeatherMan weatherMan)
        {
            this.logger = logger;
            this.weatherMan = weatherMan;
        }

        [HttpGet]
        public IEnumerable<WeatherForecast> Get()
        {
            logger.LogInformation("Somebody was checking the weather");
            return weatherMan.PredictWeather();
        }
    }
}
