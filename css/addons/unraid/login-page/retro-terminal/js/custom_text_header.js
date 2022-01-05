
 //Custom Text Header //
 // ACSII slant font

// Needs to be inside <section id="login" class="shadow">
// YOU MUST ESCAPE ANY SINGLE BACKSLASHES LIKE SO: \\

let custom_text_header = `
<div class="custom-text-header"><pre>
___________                         ___ ___                                _________ __            .___.__        
\\__    ___/______   ____   ____    /   |   \\  ____  __ __  ______ ____    /   _____//  |_ __ __  __| _/|__| ____  
  |    |  \\_  __ \\_/ __ \\_/ __ \\  /    ~    \\/  _ \\|  |  \\/  ___// __ \\   \\_____  \\\\   __\\  |  \\/ __ | |  |/  _ \\ 
  |    |   |  | \\/\\  ___/\\  ___/  \\    Y    (  <_> )  |  /\\___ \\\\  ___/   /        \\|  | |  |  / /_/ | |  (  <_> )
  |____|   |__|    \\___  >\\___  >  \\___|_  / \\____/|____//____  >\\___  > /_______  /|__| |____/\\____ | |__|\\____/ 
                       \\/     \\/         \\/                   \\/     \\/          \\/                 \\/            
</pre> </div>
`;
document.getElementById("login").innerHTML += custom_text_header
