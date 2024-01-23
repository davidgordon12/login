using Microsoft.AspNetCore.Mvc;

namespace login_api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class UserController : ControllerBase
{
    private readonly ILogger<UserController> _logger;

    public UserController(ILogger<UserController> logger)
    {
        _logger = logger;
    }

    [HttpGet]
    [Route("Validate/username={username}&password={password}")]
    public ActionResult<bool> ValidateUser(string username, string password)
    {
        if(username == "admin" 
            && password == "password")
        {
            return true;
        }

        return false;
    }
}
