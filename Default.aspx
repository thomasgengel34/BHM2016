<%@ Page Title="Home Page" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeFile="Default.aspx.cs" Inherits="_Default" %>

<asp:Content ID="BodyContent" ContentPlaceHolderID="MainContent" runat="server">
    <meta content="Bolduc House Museum, National Historic Landmark, Ste. Genevieve, Stegen, Ste.Gen, 
French Colonial History, Missouri French, Missouri French History, 18th Century Missouri, colonial site, Missouri tourist attraction, Mississippi River town, spectacular gardens, attraction"
        name="keywords" />
    <meta content="The Bolduc House Museum and National Historic Landmark in Ste. Genevieve, Missouri, 18th Century French colonial historic site, tourist attraction, and outdoor event venue with spectacular gardens"    name="description" />
    <div id="defaultPageCarousel" class="carousel slide" data-ride="carousel">
        <!-- Indicators -->
        <ol class="carousel-indicators">
            <li data-target="#defaultPageCarousel" data-slide-to="0" class="active"></li>
            <li data-target="#defaultPageCarousel" data-slide-to="1"></li>
            <li data-target="#defaultPageCarousel" data-slide-to="2"></li>
            <li data-target="#defaultPageCarousel" data-slide-to="3"></li>
            <li data-target="#defaultPageCarousel" data-slide-to="4"></li>
            <li data-target="#defaultPageCarousel" data-slide-to="5"></li>
            <li data-target="#defaultPageCarousel" data-slide-to="6"></li>
            <li data-target="#defaultPageCarousel" data-slide-to="7"></li> 
        </ol>

        <!-- Wrapper for slides -->
        <div class="carousel-inner" role="listbox">
            <div class="item active">
                <img src="Images/Default/Carousel/bolducBack_2000.png" />
            <figcaption>Looking south across the gardens to the back of the Bolduc House </figcaption>
            </div> 

            <div class="item">
                <img src="Images/Default/Carousel/LaGuignole.jpg" />
               <figcaption>La Guignole (Traditional New Year's Eve Celebration)</figcaption>   
            </div> 

            <div class="item">
                <img src="Images/Default/Carousel/BolducHouseAt7am.jpg" /> <figcaption>Early on a Misty Morning </figcaption>
            </div>

        
  <div class="item">
      <img src="Images/Default/Carousel/Jour%20de%20Fete%20006%20medium.jpg" />
                <figcaption>Jour de Fete</figcaption>
            </div>
          
            <div class="item">
                <img src="Images/Default/Carousel/smiling%20soldier%20(1).JPG" />
                <figcaption>Do NOT argue with our Re-enactors!</figcaption>
            </div>  
            <div class="item">
              <img src="Images/Default/Carousel/Spinning.JPG" />
                <figcaption>Learn about the occupations and crafts of bygone days</figcaption>
            </div>
             <div class="item">
                 <img src="Images/Default/Carousel/Ste.%20Genevieve-20120130-00137.jpg" />
                 <figcaption>Children's activities and attractions are a big part of us</figcaption>
             </div>
             <div class="item">  
                 <img src="Images/Default/Carousel/Web%20PR%20for%20African%20Exhibit.jpg" />
                 <figcaption>We frequentlyhost and provide for short-term exhibits - watch our Facebook page</figcaption>
             </div>
        </div>

        <!-- Left and right controls -->
        <a class="left carousel-control" href="#defaultPageCarousel" role="button" data-slide="prev">
            <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="right carousel-control" href="#defaultPageCarousel" role="button" data-slide="next">
            <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>

    <article>
        <h1>The Bolduc House Museum </h1>
        <p>
            <strong>Come, Explore, Imagine and Discover …</strong>
            A different time and culture…a different Colonial American experience. Come explore
                                French colonial history as it was in this Missouri's first town. Colonial Ste. Genevieve
                                was a Community of Cultures - French, American Indian, and African - where life
                                depended on the Mississippi River, where empires clashed and combined, where producers
                                of grain, lead, salt, indigo, tobacco, and pork like our Louis Bolduc prospered
                                under the colonial regimes of both France and Spain until 1803 when Louisiana was
                                purchased for a mere $15,000,000 by the United States. Come, explore, imagine and
                                discover 
                                <strong>New France: The <em>Other</em> Colonial America at the Bolduc House
                                    Museum</strong>. 
        </p>
        <p>
            For the most up to date news and events happening now at the Bolduc House Museum please like and follow our <a id="yui_3_16_0_1_1414022606199_3863" href="https://www.facebook.com/pages/Bolduc-House-Museum/42942974051">Face 
                                    Book Page</a>
        </p>
        <h3><a runat="server" href="~/Upload/Default/Bolduc Brochure 2015A.pdf">General Information</a></h3>

        <div class="row">
            <div class="col-md-6">
                &quot;Bonjour! I am Zuts, the Squirrel and Mascot of the House Bolduc! I am building 
                                this website as fast as I can, so please be patient with it as it is still under 
                                construction! We are shifting between formats to confuse the CATS as we make the
                                site more friendly to new technology (even typewriters, I think)!!&quot;
            </div>
            <div class="col-md-6">
                <img alt="Zuts with Chainsaw"
                    src="Images/Default/ZutsWithChainsaw_300.jpg" />
            </div>
        </div>
    </article>
</asp:Content>
