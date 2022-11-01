const Workout = require('../models/WorkoutModel.js');
const mongoose = require('mongoose');

const WorkoutController = {};

WorkoutController.getAllWorkouts = function(req, res, next) {
    // how is the data structured?
    console.log('controller fired')
   

    Workout.find({})
        .then(result => {

            console.log('get, found data:', result)

            res.locals.workout = result;

            console.log('relocals', res.locals.workout)
            return next()
        })
        .catch(err => next(err));
}

WorkoutController.createWorkout = function(req, res, next) {

    // console.log('req', 'controlller get', req.body)

    const {
        exercise0,
        muscleGroup0,
        weight0,
        sets0,
        reps0,
        rest0,
        rir0,
        comments0,
        exercise1,
        muscleGroup1,
        weight1,
        sets1,
        reps1,
        rest1,
        rir1,
        comments1,
        exercise2,
        muscleGroup2,
        weight2,
        sets2,
        reps2,
        rest2,
        rir2,
        comments2,
        exercise3,
        muscleGroup3,
        weight3,
        sets3,
        reps3,
        rest3,
        rir3,
        comments3,
        exercise4,
        muscleGroup4,
        weight4,
        sets4,
        reps4,
        rest4,
        rir4,
        comments4,
        startDate, 
        startTime, 
        endDay, 
        endTime,
        duration
} = req.body;

    Workout.create(
        {
            exercise0,
            muscleGroup0,
            weight0,
            sets0,
            reps0,
            rest0,
            rir0,
            comments0,
            exercise1,
            muscleGroup1,
            weight1,
            sets1,
            reps1,
            rest1,
            rir1,
            comments1,
            exercise2,
            muscleGroup2,
            weight2,
            sets2,
            reps2,
            rest2,
            rir2,
            comments2,
            exercise3,
            muscleGroup3,
            weight3,
            sets3,
            reps3,
            rest3,
            rir3,
            comments3,
            exercise4,
            muscleGroup4,
            weight4,
            sets4,
            reps4,
            rest4,
            rir4,
            comments4,
            startDate, 
            startTime, 
            endDay, 
            endTime,
            duration,
        }
    )
        .then( result => {

            // console.log('controller result', result)
            res.locals.postedWorkout = result;
            return next();
        })
        .catch(err => next(err));
};


WorkoutController.getWorkout = function(req, res, next) {

    const workoutToFind = { id: req.params.id } // this may cause problems...

    console.log('get req data by ID', workoutToFind)


    Workout.find(workoutToFind)
        .then(result => {
            res.locals.allWorkouts = result;
            return next()
        })
        .catch(err => next(err));
}

WorkoutController.updateWorkout = function(req, res, next) {

    const workoutToFind = { id: req.params.id } // this may cause problems...

    const newWorkoutInfo = { id: req.body.id } // this only allows a specific change field

    Workout.findOneAndUpdate(workoutToFind, newWorkoutInfo, { new: true })// options object sends back updated doc from db
        .then(result => {
            res.locals.updatedWorkout = result;
            return next()
        })
        .catch(err => next(err));
}

WorkoutController.deleteWorkout = function(req, res, next) {

    const workoutToDelete = { id: req.params.id } // this may cause problems...

    Workout.findOneAndDelete(workoutToDelete/* , { new: true } */ )
        .then(result => {
            res.locals.deletedWorkout = result;
            return next()
        })
        .catch(err => next(err));
}

module.exports = WorkoutController;