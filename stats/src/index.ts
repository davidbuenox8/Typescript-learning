import { MatchReader } from './MatchReader';
import { MatchResult } from './MatchResults';
import { CsvFileReader } from './CsvFileReader';

//Create an Object that satisfied the 'DataReader' interface.
const csvFileReader = new CsvFileReader('football.csv');
//Create an instance of MatchReader and pass in something satisfying
// the 'DataReader' interface.
const matchReader = new MatchReader(csvFileReader);
matchReader.load();
//matchReader.matches
