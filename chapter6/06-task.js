// 5 | Your practice tasks
// Create a file 09-classes.js and code:
// Class Book
// props: title, author, pages, price
// method details() → "Title by Author – X pages"
// Subclass Ebook (extends Book)
// extra prop: fileSizeMB
// method downloadTime(speedMbps) → seconds required (filesize / (speed ÷ 8))
// Make two Book objects and one Ebook, call every method, and log results.

class Book {
    constructor(title, author, pages, price) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.price = price;
    }

    details() {
        return `${this.title} by ${this.author} – ${this.pages} pages`;
    }
}

class Ebook extends Book {
    constructor(title, author, pages, price, fileSizeMB) {
        super(title, author, pages, price);
        this.fileSizeMB = fileSizeMB;
    }

    downloadTime(speedMbps) {
        const speedMBps = speedMbps / 8; // convert Mbps to MBps
        const seconds = this.fileSizeMB / speedMBps;
        return `${seconds.toFixed(2)} seconds to download at ${speedMbps} Mbps`;
    }
}

// Create two Book objects
const book1 = new Book("The Alchemist", "Paulo Coelho", 197, 300);
const book2 = new Book("Wings of Fire", "A.P.J. Abdul Kalam", 180, 250);

// Create one Ebook object
const ebook1 = new Ebook("Think Like a Monk", "Jay Shetty", 250, 400, 50);

// Log details
console.log(book1.details());
console.log(book2.details());
console.log(ebook1.details());
console.log(ebook1.downloadTime(20)); // Assuming 20 Mbps internet speed
