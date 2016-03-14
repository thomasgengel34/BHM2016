<%@ Page Title="" Language="C#" MasterPageFile="~/Site.master" AutoEventWireup="true" CodeFile="FrancoisValleHouse.aspx.cs" Inherits="FrancoisValleHouse" %>

<asp:Content ID="Content1" ContentPlaceHolderID="MainContent" runat="Server">
    <meta content="The Bolduc House Museum has purchased the Francois Valle House in Sainte Genevieve, Missouri and hopes to restore it to its original condition." name="description" />
    <meta content="Bolduc House Museum new building,  Francois Valle House" name="keywords" />
    <div class="margin10">
        <h1>The Francois Valle House</h1>
        <article>
            <div class="row">
                <div class="col-md-6">
                    <p>The Colonial Dames purchased this in late December 2013.  </p>
                    <p>This is the Francois Valle House, built in 1792 or earlier. It is a vertical log house on a stacked stone foundation. It belonged to the first commandant in the "new town" who was the brother of the last commandant.</p>
                    <p>Our goal is to do a historic structures report and archaeology prior to restoring the house to its original configuration and using in perhaps to interpret the military and civil government in colonial Ste. Genevieve.</p>
                    <p>The Colonial Dames purchased this in late December 2013.  </p>
                    <p>"We have some work to do.  I may watch some of it." - Zuts</p>
                </div>
                <div class="col-md-6"></div>
                <figure>
                    <img src="Images/FrancoisValleHouse/FrancoisValleHouse_600.jpg" />
                    <figcaption>The Francois Bolduc House on S. Gabouri Street </figcaption>
                </figure>
        </article>
        <article>
            <h2>Exploration</h2>
            <p>In early November 2015 Jesse Francis explored our Francois Valle II House. His book on French vertical log architecture is available in our shop.</p>
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
                </ol>

                <!-- Wrapper for slides -->
                <div class="carousel-inner" role="listbox">
                    <div class="item active">
                        <img src="Images/FrancoisValleHouse/InspectingTheAttic.jpg" alt="Inspecting The Attic" />
                    </div>

                    <div class="item">
                        <img src="Images/FrancoisValleHouse/CheckingOutTheAttic.jpg" alt="Again in the Attic" /> 
                    </div>

                    <div class="item">
                        <img src="Images/FrancoisValleHouse/LookingAtTheLathing.jpg" alt="Looking at the Lathing" />
                    </div>

                    <div class="item">
                        <img src="Images/FrancoisValleHouse/AnotherViewOfTheLathing.jpg" alt="Another View of the Lathing" />
                    </div>

                    <div class="item">
                        <img src="Images/FrancoisValleHouse/DetailedViewOfTheLathing.jpg" alt="A Detailed View of the Lathing" />
                    </div>

                    <div class="item">
                        <img src="Images/FrancoisValleHouse/LookingAtTheStoneFoundation.jpg" alt="Looking at the Stone Foundation" />
                    </div>

                    <div class="item">
                        <img src="Images/FrancoisValleHouse/PhotgraphingBeamEnds.jpg" alt="Photographing Beam Ends" />
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
        </article>
    </div>
</asp:Content>

