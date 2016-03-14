<%@ Page Title="About" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeFile="About.aspx.cs" Inherits="About" %>

<asp:Content ID="BodyContent" ContentPlaceHolderID="MainContent" runat="server">
    <div class="margin10">
        <hgroup>
            <h1>About the Museum</h1>
            <h5>Map - Hours - Admission Cost</h5>
            <h2>Location</h2>
        </hgroup>
        <ul>
            <li>
                <a href="http://www.bing.com/maps/Default.aspx?encType=1&v=2&ss=ypid.YN469x18458409&style=r&mkt=en-us&FORM=LLDP">Location on Bing</a>
            </li>
            <li>
                <a href="https://www.google.com/maps/place/125+S+Main+St,+Ste.+Genevieve,+MO+63670/&#64;37.9788094,-90.0451349,17z/data=!3m1!4b1!4m2!3m1!1s0x87d880820a1062af:0x358fbb3737213a5b">Location on Google</a>
            </li>

        </ul>
        <h2>General Map of the Campus</h2>
        <div id="AboutMap">
            <figure>
                <img alt="general layout of the buildings" src="Images/About/MySoCalledMap.png" title="Maybe this will help you get oriented" />
                <figcaption>Ok, Zuts. This map is not to scale but it might help. It was developed by a volunteer. Perhaps you would like to make a better one?</figcaption>
            </figure>
        </div>
        <div class="row">
            <div class="col-md-6">
                <h2>Hours</h2>
                <h3>Open Daily:</h3>
                <p>
                    Monday-Thursday, 10am - 4pm<br />
                    Friday 10am until 7pm (or dusk if it is earlier)
                '(Every 4th Friday until 9pm)
                    <br />
                    Saturday 10am - 5pm Sunday, noon-4pm
                </p>
                <h3>Closed:</h3>
                <ul>
                    <li>New Years Day</li>
                    <li>Easter</li>
                    <li>Thanksgiving</li>
                    <li>Christmas Eve</li>
                    <li>Christmas Day</li>
                    <li>New Years Eve</li>
                </ul>
                <h3>Please note:</h3>
                <p>Hours may vary due to unusual circumstances. USUALLY this manages to get posted to Facebook.  The above is just general guidance. </p>
            </div>
            <div class="col-md-6">
                <h2>Admission Costs </h2>
                <p>
                    Adults $8.00
                </p>
                <p>
                    Seniors (Age 65+) $6.00
                </p>
                <p>
                    Adult Students $6.00
                </p>
                <p>
                    Active Duty Military & Adult Family Members $6.00
                </p>
                <p>Children $2.00</p>
                <p>
                    Preschoolers FREE
                </p>
                <p>Group Rate Adults (15+ people) $5.00</p>
                <p>Group Rate Children (15+ people) $1.50</p>
                <p>Squirrels - 1 pecan</p>
                <p>Zuts will give a discount to all his furry little friends</p>
                <p><b>No CATS!!!</b></p>
                <p>Support dogs are welcome if they promise not to eat squirrels. </p>


            </div>
        </div>
        <h2>Ownership</h2>
        <article>
            <h3>The National Society of the Colonial Dames of America in the State of Missouri</h3>
            <p><a href="http://www.nscda.org">link to the NSCDA Web Site </a></p>
            <div class=" row">
                <div class="col-md-7">
                    <p>
                        <em>The National Society of the Colonial Dames of America in the State of Missouri
                        </em>
                        has owned, operated, and made
            available to the public the Bolduc House Museum since 1949. It is a chapter of
            the National Society of the Colonial Dames in America, an organization that is
            dedicated to Colonial American history, historic preservation, and patriotism.
                    </p>
                    <p>
                        The women members of the National Society of the Colonial Dames in America are
            descendants of individuals who lived in an American colony before 1750 and
            “rendered efficient service to his country during the Colonial period...which
            contributed to the founding of our nation.”
                    </p>
                    <p>
                        The parlor in the Linden House is dedicated to the National Society of the
            Colonial Dames of America in the State of Missouri and functions as their headquarters.
        
            Visit this room to see the large number of awards and other recognitions that
            this organization has achieved thanks to the way they have operated the Museum.
        
            Read the accounts of the Colonial Dames’ early American ancestors and their
            accomplishments. Scholars may enjoy the rare books in the Colonial Dames library and the
            information to be found in the society’s records kept in the Museum’s archives.
                    </p>
                </div>
                <div class="col-md-5">
                    <figure>
                        <img alt="Receiving the  2005 Preserve  America Award" src="Images/About/Receiving%20the%202005%20Preserve%20America%20Award.jpg" />
                        <figcaption>The Bolduc House Museum was honored with the 2005 Preserve America Award</figcaption>
                    </figure>
                </div>
            </div>

        </article>
    </div>
   
</asp:Content>
