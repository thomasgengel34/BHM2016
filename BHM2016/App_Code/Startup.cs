using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(BHM2016.Startup))]
namespace BHM2016
{
    public partial class Startup {
        public void Configuration(IAppBuilder app) {
            ConfigureAuth(app);
        }
    }
}
