<%@ Page Title="" Language="C#" MasterPageFile="~/Site.master" AutoEventWireup="true" CodeFile="JBValleHouse.aspx.cs" Inherits="JBValleHouse" %>

<asp:Content ID="Content1" ContentPlaceHolderID="MainContent" runat="Server">
    <meta content="The Bolduc House Museum purchased the Jean-Baptiste Valle House." name="description" />
    <meta content="Bolduc House Museum new building, Jean-Baptiste Valle House" name="keywords" />
    <div class="margin-10">
        <h1>The Jean-Baptiste Valle House </h1>
        <p>This is the Jean-Baptiste Valle House a.k.a. the "Last Commandant's House" It was built circa 1794 and at its core it is a vertical log post on a sill house. The rose garden outside of this house is thought to be the oldest formal rose garden in Missouri.</p>
        <p>The Colonial Dames purchased this in late December 2013.  </p>
    </div>

    <div id="myCarousel" class="carousel slide" data-ride="carousel">
        <!-- Indicators -->
        <ol class="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
            <li data-target="#myCarousel" data-slide-to="3"></li>
            <li data-target="#myCarousel" data-slide-to="4"></li>
            <li data-target="#myCarousel" data-slide-to="5"></li>
            <li data-target="#myCarousel" data-slide-to="6"></li>
            <li data-target="#myCarousel" data-slide-to="7"></li>
            <li data-target="#myCarousel" data-slide-to="8"></li>
        </ol>

        <!-- Wrapper for slides -->
        <div class="carousel-inner" role="listbox">
            <div class="item active">
                <img alt="Front of the House on South Main Street" src="Images/JBValleHouse/Jean Baptiste Valle House I_1375.jpg" />
                <figcaption>The front of the house on South Main Street. Market Street is on the left.</figcaption>
            </div>

            <div class="item">
                <img alt="The back of the house" src="Images/JBValleHouse/Jean Baptiste Valle III_1375.JPG" />
                <figcaption>The back of the house</figcaption>
            </div>

            <div class="item">
                <img alt="Looking Across the Gardens" src="Images/JBValleHouse/Garden View_1375.jpg" />
                <figcaption>Looking Across the Gardens</figcaption>
            </div>

            <div class="item">
                <img alt="the Gardens" src="Images/JBValleHouse/JB Valle 3_1375.jpg" />
                <figcaption>The Gardens</figcaption>
            </div>

            <div class="item">
                <img alt="flowers at the house" src="Images/JBValleHouse/JB Valle Flowers_1375.jpg" title="Great place to hide! -Zuts" />
                <figcaption>Flowers in the Gardens</figcaption>
            </div>

            <div class="item">
                <img alt="Roses in the garden" src="Images/JBValleHouse/Roses_1375.jpg" />
                <figcaption>Roses in the garden</figcaption>
            </div>

            <div class="item">
                <img alt="Bleeding Heart" src="Images/JBValleHouse/BleedingHeart_1375.jpg" />
                <figcaption>Bleeding Heart</figcaption>
            </div>

            <div class="item">
                <img alt="Spectacular Display of Flowers" src="Images/JBValleHouse/Flowers_1375.jpg" />
                <figcaption>A spectacularly colorful display of flowers.  "They have names, I think." - Zuts</figcaption>
            </div>

            <div class="item">
                <img alt="skunk" src="Images/JBValleHouse/This Skunk Visited Us_1375.jpg" title="Zuts in his true form - A. Cat" />
                <figcaption>An Unexpected Visitor</figcaption>
            </div>

        </div>

        <!-- Left and right controls -->
        <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
            <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
            <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>
</asp:Content>

