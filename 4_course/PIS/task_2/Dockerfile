FROM ruby:latest

WORKDIR /app

COPY . .


RUN bundle install

EXPOSE 4567

CMD ["bundle", "exec", "rackup", "--host", "0.0.0.0", "-p", "4567"]