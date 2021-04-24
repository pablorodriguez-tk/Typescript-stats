"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var csvFileReader_1 = require("./csvFileReader");
// Create an object that satisfies the 'DataReader' interface
var csvFileReader = new csvFileReader_1.CsvFileReader("football.csv");
// Create an instance of MatchReader and pass in something satisfying
// the 'DataReader' interface
var matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
// matchReader.matches
console.log("Man United won " + manUnitedWins + " games");
