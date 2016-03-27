which phantomjs >/dev/null 2>&1 || { echo >&2 "phantomjs not installed.  Aborting."; exit 1; }
which jsonv >/dev/null 2>&1 || { echo >&2 "jsonv not installed.  Aborting."; exit 1; }
PRVNUMLINES=0
function run {
    phantomjs main.js | jsonv ip,port,protocol > proxy1.csv
    awk '!x[$0]++' proxy*.csv > p.csv
    NUMOFLINES=$(wc -l < "p.csv")
    echo "[`date +"%T"`] Scrape $(($NUMOFLINES-$PRVNUMLINES)) proxy."
    PRVNUMLINES=$NUMOFLINES
    cp p.csv proxy2.csv
}
while true; do
    run
    START=`date +%s`
    while [ $(( $(date +%s) - 1800 )) -lt $START ]; do
        sleep 60
    done
done