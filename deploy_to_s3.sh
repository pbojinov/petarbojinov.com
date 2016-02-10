clear
echo -e '========================================================='
echo '  Starting Deploy...'
echo '========================================================='

echo -e '\n-- Deploying to aws s3: petarbojinov.com ------------------\n'

aws s3 sync  --profile personal --region us-west-1 dist/ s3://petarbojinov.com \
    --exclude ".git/*" \

echo -e '\n========================================================='
echo '  Done Deploying!'
echo -e '========================================================='
exit 0