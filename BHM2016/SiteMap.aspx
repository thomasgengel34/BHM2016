<%@ Page Title="" Language="C#" MasterPageFile="~/Site.master" AutoEventWireup="true" CodeFile="SiteMap.aspx.cs" Inherits="SiteMap" %>

<asp:Content ID="Content1" ContentPlaceHolderID="MainContent" runat="Server">
    <link href="Content/SiteMap.css" rel="stylesheet" />
    <div class="margin50">
        <h1>Gateway to the Museum</h1>
        <p>Each square is a page on our site. Dark blue squares are up and running. Grey squares, with solid borders, and marked with one asterisk(*) are going to be pulled in soon from the old site. Plain squares with dashed borders and two asterisks (**) are for the future. </p>
        <p>If a page is deployed, you can click on its square and go to that page.</p>
        <p>Watch as pages are added.</p>
    </div>
    <article class="margin50 fbSiteMap">
        <div data-link="default" class="siteButton up">Home</div>
        <div data-link="about" class="siteButton up">About</div>
        <div data-link="contact" class="siteButton up">Contact</div>
        <div data-link="shop" class="siteButton up">Shop</div>
        <div data-link="siteMap" class="siteButton up" title="You are Here">Site Map</div>
        <div data-link="BolducHouse" class="siteButton up">The Bolduc House</div>
        <div data-link="LeMeilleurHouse" class="siteButton up">The LeMeilleur House</div>
        <div data-link="LindenHouse" class="siteButton up">The Linden House</div>
        <div data-link="FrancoisValleHouse"class="siteButton up">The Francois Valle House</div>
        <div class="siteButton soon">The Jean-Baptiste Valle House</div>
        <div class="siteButton soon">The Bank</div>
        <div class="siteButton soon">Bolduc Family History</div>
        <div class="siteButton soon">Hands on History Room</div>
        <div class="siteButton soon">Kids</div>
        <div class="siteButton soon">Field Trips</div> 
        <div class="siteButton soon">Zuts Birthday Club</div>
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
        <div class="siteButton future">2012 LaGuignole</div>
        <div class="siteButton future">2013 LaGuignole</div>
        <div class="siteButton future">2014 LaGuignole</div> 
        <div class="siteButton future">2015-6 Evacuation due to Possible Flood</div>
        <div class="siteButton future">Archaeology at the Museum</div>
        <div class="siteButton future">Ceramics</div>
        <div class="siteButton future">Quilts</div>
        <div class="siteButton future">Colonial Recipes</div>
        <div class="siteButton future">??</div>
    </article>
    <p class="margin50">
        Is there a page you would like to see that is not here? Please email 
        <a href="mailto:Zuts@bolduchouse.org">Zuts the Squirrel</a> with your suggestion and he will get right on it. Maybe. Or someone else will do it for him. Probably.  
    </p>
    <script src="Scripts/Pages/SiteMap.js"></script>
</asp:Content>

