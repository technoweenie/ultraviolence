vendor = File.join(File.dirname(__FILE__), 'vendor')
$LOAD_PATH.unshift File.expand_path(File.join(vendor, 'spox-plist-3.0.1',    'lib'))
$LOAD_PATH.unshift File.expand_path(File.join(vendor, 'spox-textpow-0.10.3', 'lib'))
$LOAD_PATH.unshift File.expand_path(File.join(vendor, 'ultraviolet-0.10.5',  'lib'))

require 'sinatra'
require 'uv'

post '/api' do
  uv env['rack.input'].read, params
end

def uv(text, params)
  show_line_nums = (params[:line_numbers] || params[:l]) == '1'
  Uv.parse text, 'xhtml', syntax_for(params), show_line_nums, params[:theme] || params[:t]
end

def syntax_for(params)
  if f = (params[:filename] || params[:f])
    f.gsub(/[^\.]*\./, '')
  else
    params[:syntax] || params[:s]
  end
end