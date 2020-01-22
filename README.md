# Sidescroller
<img src="Snake foto's/SnakeInAction.png" width="250px" height="200px" style="float: right;">	
							<img src="Snake foto's/snakecode1.png" width="1100px" height="400px" style="float: right;">
							<p>Ik heb eerst de canvas die ik gemaakt heb in de HTML link opgeroepen in Javascript d.m.v. de ID ervan op te roepen en ik heb deze ook vervolgens een context gegeven met width en height. Ik heb vervolgens een snake klasse gemaakt met alle functionaliteiten erin die een snake nodig zou moeten hebben. Dat heb ik ook gedaan met de appel en gameworld.</p>
							<img src="Snake foto's/snakecode2.png" width="1100px" height="200px" style="float: right;">
							<p>Hierin staat de code voor als de slang zijn eigen staart opeet dan krijgt de staart weer een value van 3 en de score wordt 0.</p>
							<img src="Snake foto's/snakecode3.png" width="1100px" height="200px" style="float: right;">
							<p>Hierin wordt er gekeken of de slang buiten de canvas gaat. Daarbij heb ik formules gebruikt en bordersize van de gameworld voor als de slang buiten de border zou gaan dat de slang dan ook vervolgend aan de andere kant tevoorschijn zou komen.</p>
							<img src="Snake foto's/snakecode4.png" width="1100px" height="300px" style="float: right;">
                            <p>Hierin is de code voor als de slang de appel opeet. Ik dat in een while loop gegooid omdat ik constant de appel in een nieuwe positie wilde hebben nadat de slang deze appel opgegeten had. Ik heb daarbij de x waarde en y waarde van de appel gepakt en dit gebruikt in Math.Random * gameWorld.tileSize zodat de appel op willekeurige plekken te zien zou zijn.</p>
                            <p>Er staat ook een functie scoreKeeper die de score bijhoudt voor elke keer dat als de slang de appel opeet.</p>
                            <h3>Klok</h3>
                            <img src="Media Semester 2/Portfolio/DEV/Codes afbeeldingen/klok.png" width="300px" height="200px" style="float: right;">	
							<img src="Klok foto's/klokcode1.png" width="1100px" height="100px" style="float: right;">
							<p>Het eerste wat ik gedaan had was om via QuerySelector mijn data sets op te roepen in JS die ik had gemaakt in HTML.</p>
							<img src="Klok foto's/klokcode2.png" width="1100px" height="100px" style="float: right;">
							<p>Hierin pak ik de element die ik wil laten draaien. Daarbij pak ik de variabele die ik had aangemaakt in de CSS en pas ik de formule bij om deze 360 graden te laten draaien.</p>
							<img src="Klok foto's/klokcode3.png" width="1100px" height="200px" style="float: right;">
						    <p>Hierin staat de code waarbij ik de property Date pak om live tijden te kunnen krijgen. Hierbij doe ik bij de secondeteller de formule toepassen zodat deze om de seconde meegaat. Dit doe ik door getSeconds te pakken om zo de secondes te krijgen. Bij de minutenteller doe ik dit ook maar dan met getMinutes en bij de urenteller doe ik dit met getHours en gebruik ik de formuke om het gedeelder 12 te doen omdat er op een klok 12 uren staan. Nadat de secondeteller een minuut voorbij is gaat de minutentellen gelijk een minuut voorbij. Hetzelfde is ook het geval bij de urenteller.</p>
                            <p>in de code daaronder roep ik de functie van clockTime aan zodat de tellers ook meedraaien. Op het laatst gebruik ik een setInterval zodat dit ook blijft tellen.</p>
							<p>Het werkt niet in Microsoft Edge. Ik heb het geprobeerd om ook compatible te maken in Edge maar ben er helaas niet uitgekomen.</p>
                            <h3>Boter, Kaas en Eieren</h3>
                            <img src="Boter foto's/botercode1.png" width="1100px" height="150px" style="float: right;">
							<p>Het eerste wat ik gedaan had in JS was om alle mogelijke combinaties die je kon hebben om te winnen in een array stoppen zodat ik deze later kon oproepen.</p>
							<img src="Boter foto's/botercode2.png" width="1100px" height="400px" style="float: right;">
                            <p>Ik had 6 vaiabelen gemaakt. Hierbij pak met signsData alle data van mijn divs die ik had aangemaakt in mijn HTML. Met game pak ik simpelweg de id van de game: het bord om preciezer te zijn. Met winnerMessage laat ik de tekst zien die te zien is aan het einde einde van een spel. buttonRestart is de knop waarmee je doet restarten en winnerText is de data van de div die ik had aangemaakt in HTML. turn0 is een variabele om de beurt te constateren van de spelers.</p>
                            <p>In firstTurn gebruik ik een foreach loop om zo door alle signs heen te gaan die ik aangeroepen heb met signsData. Darrbij doe ik eerst de signs weghalen zodat je opnieuw kunt spelen, en dan voeg ik een knop toe die een functie oproept genaamd clickerSigns.</p>
                            <img src="Boter foto's/botercode3.png" width="1100px" height="400px" style="float: right;">
						    <p>In clickerSigns kijkt de code naar wiens beurt het is. Ik roep er ook meerdere functies op om ook te bepalen of je gewonnen hebt, of dat het gelijk spel is.</p>
                            <p>In hoverSigns mijn code naar wiens beurt het is en als het je beurt is kan je de symbool zien voordat je op het vlakje klikt. Hierdoor ben je er zeker van dat het jou beurt is.</p>
                            <img src="Boter foto's/botercode4.png" width="1100px" height="600px" style="float: right;">
                            <p>singsPlacer wordt gebruikt om de symbool te plaatsen op het scherm, hierbij gebruik ik classlist.add om de CSS code aan te roepen die ik gemaakt had.</p>
                            <p>witchTurn kijkt naar wiens beurt het is.</p>
                            <p>trueWinner kijkt naar wie de winnaar is d.m.v. alle mogelijke winnende combinaties te checken met de huidige combinaties van de speler. Als dit true is dan activeert deze functie omdat bij winner.some hij checkt of die overeenkomen met de combinaties die de speler maakt. De functie checkt daarbij elk individuele klasse die de speler klikt.</p>
                            <p>winnerDetermined bekijkt of de speler gewonnen heeft of dat het gelijkspel. Hierbij returned hij de winnende tekst die te zien is als er een draw is of een winnaar.</p>
                            <p>In trueDraw wordt er gekeken naar of alle plekken ingevuld zijn door een X of O. Als dit true is dan achtiveert deze functie. Om er voor te zorgen dat signsData.every zou werken heb ik het in een array gestopt.</p>