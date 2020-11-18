function comprobarletras(cad){
	cad = cad.toLowerCase();
	var v = new Array();
	for(i=0;i<26;i++){
        v[i]=0;
    }
	for(i=0;i<cad.length;i++){
		switch(cad.charAt(i)){
            case 'a': 
                v[0]++; break;
            case 'b': 
                v[1]++; break;
            case 'c': 
                v[2]++; break;
            case 'd': 
                v[3]++; break;
            case 'e': 
                v[4]++; break;
            case 'f': 
                v[5]++; break;
            case 'g': 
                v[6]++; break;
            case 'h': 
                v[7]++; break;
            case 'i': 
                v[8]++; break;
            case 'j': 
                v[9]++; break;
            case 'k': 
                v[10]++; break;
            case 'l': 
                v[11]++; break;
            case 'm': 
                v[12]++; break;
            case 'n': 
                v[13]++; break;
            case 'o': 
                v[14]++; break;
            case 'p': 
                v[15]++; break;
            case 'q': 
                v[16]++; break;
            case 'r':   
                v[17]++; break;
            case 's': 
                v[18]++; break;
            case 't': 
                v[19]++; break;
            case 'u': 
                v[20]++; break;
            case 'v': 
                v[21]++; break;
            case 'w': 
                v[22]++; break;
            case 'x': 
                v[23]++; break;
            case 'y': 
                v[24]++; break;
            case 'z': 
                v[25]++; break;
		}
	}
	for(i=0;i<26;i++){
		switch(i){
            case 0: 
                document.write('A: '); break;
            case 1: 
                document.write('B: '); break;
            case 2: 
                document.write('C: '); break;
            case 3: 
                document.write('D: '); break;
            case 4: 
                document.write('E: '); break;
            case 5: 
                document.write('F: '); break;
            case 6: 
                document.write('G: '); break;
            case 7: 
                document.write('H: '); break;
            case 8: 
                document.write('I: '); break;
            case 9: 
                document.write('J: '); break;
            case 10: 
                document.write('K: '); break;
            case 11: 
                document.write('L: '); break;
            case 12: 
                document.write('M: '); break;
            case 13: 
                document.write('N: '); break;
            case 14: 
                document.write('O: '); break;
            case 15: 
                document.write('P: '); break;
            case 16: 
                document.write('Q: '); break;
            case 17: 
                document.write('R: '); break;
            case 18: 
                document.write('S: '); break;
            case 19: 
                document.write('T: '); break;
            case 20: 
                document.write('U: '); break;
            case 21: 
                document.write('V: '); break;
            case 22: 
                document.write('W: '); break;
            case 23: 
                document.write('X: '); break;
            case 24: 
                document.write('Y: '); break;
            case 25: 
                document.write('Z: '); break;
		}
		document.write(v[i]);
		document.write('<br>');
	}
}
