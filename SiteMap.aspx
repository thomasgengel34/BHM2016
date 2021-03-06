﻿<%@ Page Title="" Language="C#" MasterPageFile="~/Site.master" AutoEventWireup="true" CodeFile="SiteMap.aspx.cs" Inherits="SiteMap" %>

<asp:Content ID="Content1" ContentPlaceHolderID="MainContent" runat="Server">
    <meta name="description" content="This webpage shows all the webpages on the Bolduc House Museum website for the various buildings, activities, crafts and people including children and adults."> 
    <link href="Content/SiteMap.css" rel="stylesheet" />
    <div class="margin50">
        <h1>Gateway to the Museum</h1>
        <p>Each square is a page on our site. </p>
        <p>If a page is deployed, you can click on its square and go to that page.</p>
        <p>Watch as pages are added. Grey squares, with solid borders, and marked with one asterisk(*) are going to be pulled in soon from the old site. Plain squares with dashed borders and two asterisks (**) are for the future. </p>
    
    <div id="flexBoxSiteMap">  
        <div data-link="default" class="siteButton up admin">Home</div>
        <div data-link="about" class="siteButton up admin">About</div>
        <div data-link="contact" class="siteButton up admin">Contact</div>
        <div data-link="shop" class="siteButton up admin">Shop</div>
        <div data-link="siteMap" class="siteButton up admin" title="You are Here">Site Map</div>
        <div data-link="LindenHouse" class="siteButton up bldg">The Linden House<img src="Images/SiteMap/Linden%20House100.jpg" title="On the east side of S. Main. Start Here" alt="the front of the Linden House" /></div>
        <div data-link="BolducHouse" class="siteButton up bldg">The Bolduc House
            <img src="Images/SiteMap/Bolduc_100.jpg" alt="The Bolduc House looking Northwest" title="On the west side of S. Main, across from the Linden House"/></div>
        <div data-link="LeMeilleurHouse" class="siteButton up bldg">The LeMeilleur House
            <img src="Images/SiteMap/LeMeilleurHouse2_100.jpg" alt="front of the LeMeilleur House" title="On the west side of S. Main, just north of the Bolduc House" /></div>
        <div data-link="JBValleHouse" class="siteButton up bldg">The J.B.Valle House<img src="Images/SiteMap/Jean%20Baptiste%20Valle%20House%20I_100.jpg" title="The Jean-Baptiste Valle House is on the Northwest corner of Market and South Main" alt="The front of the Jean-Baptiste Valle House"/></div>
        <div data-link="FrancoisValleHouse"class="siteButton up bldg">The Francois Valle House<img src="Images/SiteMap/FrancoisValleHouse_100.jpg" title="This house is on S. Gabouri. It is not yet ready for tours" alt="the front of the Francois Valle House"/></div> 
        <div data-link="BankBuilding" class="siteButton up bldg">The Bank Building<br /><br /><img src="Images/SiteMap/bank%205_100.JPG"  title="This is on the south side of Market street and you might pass it when you come visit. It is not open yet."
            alt="the Bank Building"/></div>
        <div data-link="BolducFamilyHistory" class="siteButton history up">Bolduc Family History<img src="Images/SiteMap/TheBattle_100.jpg" alt="Picture of the Battle of Quebec" title="Picture of the Battle of Quebec" /></div> 
         <div class="siteButton soon kids">Kids</div>
        <div class="siteButton soon kids">Hands on History Room</div> 
        <div class="siteButton soon kids">Field Trips</div> 
        <div class="siteButton soon kids">Zuts Birthday Club</div>
        <div class="siteButton soon">Arrangements</div>
        <div class="siteButton soon">Weddings</div>
        <div class="siteButton soon">Ste. Genevieve</div>
        <div class="siteButton soon">American Indians</div>
        <div class="siteButton soon">Appleton Map</div>
        <div class="siteButton soon">Art Walk and Galleries</div>
        <div class="siteButton soon">The Stained Glass Window</div>
        <div class="siteButton soon">The Gardens</div>
        <div class="siteButton soon">A Squirrel's Tour of the Gardens</div>
        <div class="siteButton soon">The Rozier Library</div>
        <div class="siteButton soon">The Way We Worked</div>
        <div class="siteButton soon">Future Workers</div>
        <div class="siteButton soon">1812 New Madrid Earthquake Exhibit</div>
        <div class="siteButton soon">Colonial Dames</div>
        <div class="siteButton soon">Dr. E. A. Connally</div>
        <div class="siteButton soon">1967 LaGuignole</div>
        <div class="siteButton soon">2010 LaGuignole</div>
        <div class="siteButton soon">2011 LaGuignole</div>
         <div class="siteButton future">Slavery in Ste.Genevieve</div>  
        <div class="siteButton future">2012 LaGuignole</div>
        <div class="siteButton future">2013 LaGuignole</div>
        <div class="siteButton future">2014 LaGuignole</div> 
        <div class="siteButton future">2015-6 Evacuation due to Possible Flood</div>
        <div class="siteButton future">Archaeology at the Museum</div>
        <div class="siteButton future">Ceramics</div>
        <div class="siteButton future">Quilts</div>
        <div class="siteButton future">Colonial Recipes</div>
        <div class="siteButton future">??</div> 
        </div>
    <p>
        Is there a page you would like to see that is not here? Please email 
        <a href="mailto:Zuts@bolduchouse.org">Zuts the Squirrel</a> with your suggestion and he will get right on it. Maybe. Or someone else will do it for him. Probably.  
    </p>
        </div>
    <script src="Scripts/Pages/SiteMap.js"></script>
</asp:Content>

