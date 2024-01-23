using Microsoft.AspNetCore.Mvc;

namespace login_api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class UserController : ControllerBase
{
    [HttpGet]
    [Route("Validate")]
    public ActionResult<bool> ValidateUser(UserModel user)
    {
        if(user.Username == String.Empty 
            || user.Password == String.Empty)
        {
            return false;
        }

        return true;
    }
}
