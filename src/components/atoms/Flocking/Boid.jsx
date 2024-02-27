import React from 'react';

class Boid extends React.Component {
  constructor(props) {
    super(props);
    const { p5 } = props;
    this.p5 = p5;
    this.position = p5.createVector(p5.random(p5.width), p5.random(p5.height));
    this.velocity = p5.createVector(p5.random(-2, 2), p5.random(-2, 2));
    this.velocity.setMag(p5.random(2, 4));
    this.acceleration = p5.createVector();
    this.maxForce = 0.5;
    this.maxSpeed = 4;
    this.opacity = 0;
  }

  show(
    p5
    //, img
  ) {
    // let angle = this.velocity.heading();
    let count = p5.frameCount;
    this.opacity = count > 255 ? 255 : count;
    p5.strokeWeight(6);
    p5.stroke(233, 138, 21, this.opacity);
    p5.point(this.position.x, this.position.y);

    // p5.push();
    // p5.translate(this.position.x, this.position.y);
    // p5.imageMode(p5.CENTER);
    // p5.rotate(angle);
    // p5.image(img, this.position.x, this.position.y);

    // p5.pop();
  }

  update() {
    this.position.add(this.velocity);
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.maxSpeed);
    this.acceleration.mult(0);
  }

  align(boids) {
    let perceptionRadius = 25;
    let steering = this.p5.createVector(0, 0);
    let total = 0;

    for (let other of boids) {
      let d = this.p5.dist(this.position.x, this.position.y, other.position.x, other.position.y);
      if (other !== this && d < perceptionRadius) {
        steering.add(other.velocity);
        total++;
      }
    }

    if (total > 0) {
      steering.div(total);
      steering.setMag(this.maxSpeed);
      steering.sub(this.velocity);
      steering.limit(this.maxForce);
    }

    return steering;
  }

  cohesion(boids) {
    let perceptionRadius = 70;
    let steering = this.p5.createVector(0, 0);
    let total = 0;

    for (let other of boids) {
      let d = this.p5.dist(this.position.x, this.position.y, other.position.x, other.position.y);
      if (other !== this && d < perceptionRadius) {
        steering.add(other.position);
        total++;
      }
    }

    if (total > 0) {
      steering.div(total);
      steering.sub(this.position);
      steering.setMag(this.maxSpeed);
      steering.sub(this.velocity);
      steering.limit(this.maxForce);
    }

    return steering;
  }

  separation(boids) {
    let perceptionRadius = 50;
    let steering = this.p5.createVector();
    let total = 0;
    for (let other of boids) {
      let d = this.p5.dist(this.position.x, this.position.y, other.position.x, other.position.y);
      if (other !== this && d < perceptionRadius) {
        let diff = this.p5.createVector(0, 0);
        diff.add(this.position);
        diff.sub(other.position);
        diff.div(d);
        steering.add(diff);
        total++;
      }
    }
    if (total > 0) {
      steering.div(total);
      steering.setMag(this.maxSpeed);
      steering.sub(this.velocity);
      // steering.limit(this.maxForce);
    }
    return steering;
  }

  flock(boids, mulAl, mulCoh, mulSep) {
    let alignment = this.align(boids);
    let cohesion = this.cohesion(boids);
    let separation = this.separation(boids);

    alignment.mult(mulAl);
    cohesion.mult(mulCoh);
    separation.mult(mulSep);

    this.acceleration.add(separation);
    this.acceleration.add(alignment);
    this.acceleration.add(cohesion);

    let mouseVelocity = this.p5.createVector(this.p5.mouseX - this.p5.pmouseX, this.p5.mouseY - this.p5.pmouseY);
    if (this.p5.dist(this.position.x, this.position.y, mouseVelocity.x, mouseVelocity.y) < 150) {
      this.velocity.add(mouseVelocity.mult(50));
    }
  }

  edges() {
    if (this.position.x > this.p5.width) this.position.x = 0;
    else if (this.position.x < 0) this.position.x = this.p5.width;

    if (this.position.y > this.p5.height) this.position.y = 0;
    else if (this.position.y < 0) this.position.y = this.p5.height;
  }
}

export default Boid;
