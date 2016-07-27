'use strict';

var Car = function (mpg) {
  this.distance=0;
  this.odom=0;
  this.mpg=mpg;
  this.tripstaken=[];
  if(this.gallons===undefined){
    this.gallons=0;
  }

  var gal;
gal+=this.gallons;
return gal;
};

Car.prototype.fill = function (gallons) {
  this.gallons+=gallons;
};
Car.prototype.drive=function(distance){
  this.distance=distance;
  this.tripstaken.push(this.distance + " miles");
  this.gallons=this.gallons-(this.distance/this.mpg);
  return this.gallons;
};
Car.prototype.odometer=function(){
  this.odom=this.odom+this.distance;
  return this.odom;
};
Car.prototype.trips=function(){
  return this.tripstaken;
};
module.exports = Car;
