// Lista de nombres
var names = ["John", "Sarah", "Jim", "Emma", "Jack", "Olivia", "Michael", "Julia"];

// Recorrer cada nombre
for (var i = 0; i < names.length; i++) {
    var firstLetter = names[i].charAt(0).toLowerCase();

    if (firstLetter === 'j') {
        // Si empieza con J o j, despedir
        byeSpeaker.sayBye(names[i]);
    } else {
        // De lo contrario, saludar
        helloSpeaker.sayHello(names[i]);
    }
}