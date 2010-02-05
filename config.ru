require File.dirname(__FILE__) + "/ultraviolence.rb"

set :run, false
set :env, ENV['APP_ENV'] || :production

run Sinatra.application