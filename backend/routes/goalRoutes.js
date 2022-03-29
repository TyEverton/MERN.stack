const express = require('express')
const router = express.Router()
const {
  getGoals,
  setGoals,
  updateGoals,
  deleteGoals,
} = require('../controllers/goalController')
const { protect } = require('../middleware/authMiddleware')
// router.route lines below replace the router.get, router.post, router.put and router.delete lines of code
router.route('/').get(protect, getGoals).post(protect, setGoals)
router.route('/:id').delete(protect, deleteGoals).put(protect, updateGoals)

// router.get('/', getGoals)

// router.post('/', setGoal)

// router.put('/:id', updateGoal)

// router.delete('/:id', deleteGoal)

module.exports = router
