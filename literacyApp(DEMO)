import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { 
  TrendingUp, BookOpen, DollarSign, GraduationCap, 
  AlertCircle, CheckCircle2, Star, Trophy,
  PiggyBank, Wallet, LineChart, CreditCard
} from 'lucide-react';

const LadderApp = () => {
  const [step, setStep] = useState('welcome');
  const [answers, setAnswers] = useState({});
  const [progress, setProgress] = useState(0);
  const [currentLesson, setCurrentLesson] = useState(null);
  const [completedLessons, setCompletedLessons] = useState([]);
  const [userStreak, setUserStreak] = useState(0);
  const [totalPoints, setTotalPoints] = useState(0);

  // Enhanced question set
  const questions = {
    age: {
      text: "What's your age range?",
      options: ['Under 18', '18-25', '26-35', '36-50', '50+'],
      icon: <AlertCircle className="h-6 w-6" />
    },
    experience: {
      text: "How would you describe your money management experience?",
      options: ['Complete beginner', 'Know the basics', 'Intermediate', 'Advanced'],
      icon: <BookOpen className="h-6 w-6" />
    },
    goals: {
      text: "What's your main financial goal right now?",
      options: ['Save money', 'Learn investing', 'Manage debt', 'Build credit', 'Create a budget'],
      icon: <Trophy className="h-6 w-6" />
    },
    income: {
      text: "Do you currently have a regular income?",
      options: ['Yes, full-time job', 'Yes, part-time', 'No income yet', 'Prefer not to say'],
      icon: <Wallet className="h-6 w-6" />
    },
    learning_style: {
      text: "How do you prefer to learn?",
      options: ['Visual examples', 'Reading text', 'Practice exercises', 'Interactive games'],
      icon: <GraduationCap className="h-6 w-6" />
    },
    financial_priorities: {
      text: "What's most important to you right now?",
      options: ['Building emergency savings', 'Investing for the future', 'Paying off debt', 'Learning about taxes'],
      icon: <Star className="h-6 w-6" />
    }
  };

  // Comprehensive lesson content
  const lessonModules = {
    "Young Money Master": {
      icon: <PiggyBank />,
      modules: [
        {
          title: "Understanding Money Basics",
          lessons: [
            {
              title: "What is Money?",
              content: "Interactive lesson about the history and function of money",
              quiz: [
                {
                  question: "Which of these is a function of money?",
                  options: ["Store of value", "Medium of exchange", "Unit of account", "All of the above"],
                  correct: 3
                }
              ],
              activities: ["Create a money timeline", "Identify different currencies"]
            },
            {
              title: "Saving vs. Spending",
              content: "Learn to make smart choices with your money",
              quiz: [
                {
                  question: "What's the first step in saving money?",
                  options: ["Set a goal", "Open a bank account", "Ask for allowance", "Buy something"],
                  correct: 0
                }
              ],
              activities: ["Track spending for a week", "Create a savings goal"]
            }
          ]
        }
      ]
    },
    "Financial Foundations": {
      icon: <DollarSign />,
      modules: [
        {
          title: "Budgeting Basics",
          lessons: [
            {
              title: "Creating Your First Budget",
              content: "Step-by-step guide to building a personal budget",
              quiz: [
                {
                  question: "What's the 50/30/20 rule?",
                  options: [
                    "50% needs, 30% wants, 20% savings",
                    "50% savings, 30% needs, 20% wants",
                    "50% wants, 30% savings, 20% needs",
                    "50% needs, 30% savings, 20% wants"
                  ],
                  correct: 0
                }
              ],
              activities: ["Create a monthly budget", "Track expenses for 30 days"]
            }
          ]
        }
      ]
    },
    "Advanced Wealth Builder": {
      icon: <LineChart />,
      modules: [
        {
          title: "Investment Fundamentals",
          lessons: [
            {
              title: "Understanding Stocks and Bonds",
              content: "Learn about different investment vehicles",
              quiz: [
                {
                  question: "What is a stock?",
                  options: [
                    "A loan to a company",
                    "Ownership in a company",
                    "A type of savings account",
                    "A government bond"
                  ],
                  correct: 1
                }
              ],
              activities: ["Create a mock investment portfolio", "Research different stocks"]
            }
          ]
        }
      ]
    }
  };

  // Progress tracking system
  const trackProgress = (lessonId) => {
    setCompletedLessons([...completedLessons, lessonId]);
    setTotalPoints(prev => prev + 100);
    updateStreak();
  };

  const updateStreak = () => {
    // Simulating daily streak tracking
    setUserStreak(prev => prev + 1);
  };

  const handleAnswer = (question, answer) => {
    setAnswers(prev => ({ ...prev, [question]: answer }));
    setProgress(prev => prev + (100 / Object.keys(questions).length));
    
    if (Object.keys(answers).length === Object.keys(questions).length - 1) {
      setStep('complete');
    } else {
      const questionKeys = Object.keys(questions);
      const currentIndex = questionKeys.indexOf(question);
      setStep(questionKeys[currentIndex + 1]);
    }
  };

  const LessonScreen = ({ lesson }) => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">{lesson.title}</h2>
        <div className="flex items-center gap-2">
          <Star className="h-5 w-5 text-yellow-500" />
          <span>{totalPoints} points</span>
        </div>
      </div>

      <Card>
        <CardContent className="p-6">
          <div className="prose max-w-none">
            <p>{lesson.content}</p>
            
            <h3 className="text-lg font-semibold mt-4">Activities</h3>
            <ul className="list-disc pl-5 space-y-2">
              {lesson.activities.map((activity, index) => (
                <li key={index}>{activity}</li>
              ))}
            </ul>

            <div className="mt-6">
              <h3 className="text-lg font-semibold">Knowledge Check</h3>
              {lesson.quiz.map((quizItem, index) => (
                <div key={index} className="mt-4">
                  <p className="font-medium">{quizItem.question}</p>
                  <div className="space-y-2 mt-2">
                    {quizItem.options.map((option, optIndex) => (
                      <Button
                        key={optIndex}
                        variant="outline"
                        className="w-full text-left justify-start"
                        onClick={() => {
                          if (optIndex === quizItem.correct) {
                            trackProgress(lesson.title);
                          }
                        }}
                      >
                        {option}
                      </Button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const ProgressDashboard = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Trophy className="h-5 w-5 text-yellow-500" />
              <div>
                <p className="text-sm text-gray-600">Current Streak</p>
                <p className="text-xl font-bold">{userStreak} days</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 text-blue-500" />
              <div>
                <p className="text-sm text-gray-600">Total Points</p>
                <p className="text-xl font-bold">{totalPoints}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Learning Progress</CardTitle>
        </CardHeader>
        <CardContent>
          <Progress value={(completedLessons.length / 10) * 100} className="mb-2" />
          <p className="text-sm text-gray-600">
            {completedLessons.length} of 10 lessons completed
          </p>
        </CardContent>
      </Card>
    </div>
  );

  // Accessibility features
  const AccessibilityControls = () => (
    <div className="flex items-center gap-2 mb-4">
      <Button
        variant="outline"
        size="sm"
        onClick={() => document.body.classList.toggle('text-lg')}
      >
        Toggle Font Size
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={() => document.body.classList.toggle('high-contrast')}
      >
        High Contrast
      </Button>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl">
        <CardContent className="pt-6">
          <AccessibilityControls />
          
          {step === 'welcome' && (
            <div className="text-center space-y-6">
              <TrendingUp className="h-16 w-16 mx-auto text-blue-500" />
              <h1 className="text-3xl font-bold text-blue-600">Welcome to Ladder</h1>
              <p className="text-lg text-gray-600">Your journey to financial success starts here!</p>
              <Button 
                className="w-full bg-blue-500 hover:bg-blue-600" 
                onClick={() => setStep('age')}
              >
                Start Your Journey
              </Button>
            </div>
          )}

          {Object.keys(questions).includes(step) && (
            <div className="space-y-6">
              <Progress value={progress} className="w-full" />
              <div className="flex items-center gap-2 mb-4">
                {questions[step].icon}
                <h2 className="text-xl font-semibold">{questions[step].text}</h2>
              </div>
              <div className="space-y-3">
                {questions[step].options.map((option) => (
                  <Button
                    key={option}
                    className="w-full text-left justify-start"
                    variant="outline"
                    onClick={() => handleAnswer(step, option)}
                  >
                    {option}
                  </Button>
                ))}
              </div>
            </div>
          )}

          {step === 'complete' && (
            <div className="space-y-6">
              <ProgressDashboard />
              {currentLesson ? (
                <LessonScreen lesson={currentLesson} />
              ) : (
                <div className="grid gap-4">
                  {Object.entries(lessonModules).map(([key, module]) => (
                    <Card key={key}>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          {module.icon}
                          {key}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-3">
                          {module.modules.map((mod) => (
                            <li key={mod.title}>
                              <Button
                                variant="outline"
                                className="w-full text-left justify-start"
                                onClick={() => setCurrentLesson(mod.lessons[0])}
                              >
                                {mod.title}
                              </Button>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default LadderApp;
